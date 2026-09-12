import 'dart:js_interop';
import 'dart:math' as math;

import 'package:web/web.dart' as web;

import 'p5_gui_models.dart';
export 'p5_gui_models.dart';
import 'gui_flow_coordinator.dart';
import '../presentation/shader_tuning_state.dart';
export '../presentation/shader_tuning_state.dart';

/// Core Gameplay Canvas GUI Engine rendering Persona 5 Paintbrush & Comic-Cut Aesthetics.
class CanvasP5GuiEngine {
  final web.HTMLCanvasElement canvas;
  late final web.CanvasRenderingContext2D ctx;

  double _animationTime = 0.0;
  final List<CanvasHitBox> _currentChoiceHitBoxes = [];
  int _choiceScrollOffset = 0;
  int _shaderScrollOffset = 0;

  List<CanvasHitBox> get currentChoiceHitBoxes =>
      List.unmodifiable(_currentChoiceHitBoxes);

  void scrollChoices(int delta, int choiceCount) {
    if (choiceCount <= 0) {
      _choiceScrollOffset = 0;
      return;
    }
    _choiceScrollOffset = (_choiceScrollOffset + delta).clamp(
      0,
      choiceCount - 1,
    );
  }

  void ensureChoiceVisible(int index, int choiceCount, int visibleCount) {
    if (choiceCount <= 0 || visibleCount <= 0) return;
    final maxOffset = math.max(0, choiceCount - visibleCount);
    if (index < _choiceScrollOffset) _choiceScrollOffset = index;
    if (index >= _choiceScrollOffset + visibleCount) {
      _choiceScrollOffset = index - visibleCount + 1;
    }
    _choiceScrollOffset = _choiceScrollOffset.clamp(0, maxOffset);
  }

  void scrollShaderMenu(int delta, int itemCount) {
    if (itemCount <= 0) {
      _shaderScrollOffset = 0;
      return;
    }
    _shaderScrollOffset = (_shaderScrollOffset + delta).clamp(
      0,
      math.max(0, itemCount - 1),
    );
  }

  CanvasP5GuiEngine(this.canvas) {
    final context = canvas.getContext('2d');
    if (context is! web.CanvasRenderingContext2D) {
      throw StateError('Failed to get 2D context for CanvasP5GuiEngine');
    }
    ctx = context;
  }

  /// Clears and resizes the UI canvas to match the display size and pixel ratio.
  void beginFrame(double dt, double width, double height) {
    _animationTime += dt;
    _currentChoiceHitBoxes.clear();

    final dpr = web.window.devicePixelRatio.toDouble();
    final targetW = (width * dpr).toInt();
    final targetH = (height * dpr).toInt();

    if (canvas.width != targetW || canvas.height != targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);
  }

  /// Finishes the frame and restores canvas state.
  void endFrame() {
    ctx.restore();
  }

  // =========================================================================
  // 1. PERSONA 5 PAINTBRUSH & POLYGON GRAPHICS PRIMITIVES
  // =========================================================================

  /// Draws a skewed torn-paper / brush-cut polygon container.
  void drawBrushPanel({
    required double x,
    required double y,
    required double width,
    required double height,
    double skewAngleRad = -0.08, // ~ -4.5 degrees
    String fillColor = P5Palette.inkBlackTranslucent,
    String? borderColor = P5Palette.amberGold,
    double borderWidth = 2.0,
    bool shadow = true,
    double cutCornerSize = 14.0,
  }) {
    ctx.save();
    ctx.translate(x, y);

    final halfW = width * 0.5;
    final halfH = height * 0.5;

    // Calculate skewed polygon vertices
    final tanSkew = math.tan(skewAngleRad);
    final p0 = Point2D(-halfW + halfH * tanSkew + cutCornerSize, -halfH);
    final p1 = Point2D(halfW + halfH * tanSkew, -halfH);
    final p2 = Point2D(halfW - halfH * tanSkew, halfH - cutCornerSize);
    final p3 = Point2D(halfW - halfH * tanSkew - cutCornerSize, halfH);
    final p4 = Point2D(-halfW - halfH * tanSkew, halfH);
    final p5 = Point2D(-halfW + halfH * tanSkew, -halfH + cutCornerSize);

    if (shadow) {
      ctx.save();
      ctx.fillStyle = P5Palette.shadowBlack.toJS;
      ctx.translate(6.0, 8.0);
      _drawPolygonPath([p0, p1, p2, p3, p4, p5]);
      ctx.fill();
      ctx.restore();
    }

    // Fill polygon
    ctx.fillStyle = fillColor.toJS;
    _drawPolygonPath([p0, p1, p2, p3, p4, p5]);
    ctx.fill();

    // Border stroke
    if (borderColor != null && borderWidth > 0) {
      ctx.strokeStyle = borderColor.toJS;
      ctx.lineWidth = borderWidth;
      ctx.stroke();
    }

    ctx.restore();
  }

  /// Draws high-energy comic speedlines radiating or streaking in a rect.
  void drawSpeedlines({
    required double x,
    required double y,
    required double width,
    required double height,
    double angleRad = -0.15,
    int lineCount = 8,
    String color = 'rgba(211, 47, 47, 0.25)',
  }) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angleRad);
    ctx.strokeStyle = color.toJS;
    ctx.lineWidth = 1.5;

    final random = math.Random(42);
    for (int i = 0; i < lineCount; i++) {
      final ly =
          -height * 0.5 +
          (height / lineCount) * i +
          (random.nextDouble() - 0.5) * 8.0;
      final lx1 = -width * 0.5 + (random.nextDouble() * 30.0);
      final lx2 = width * 0.5 - (random.nextDouble() * 30.0);
      ctx.beginPath();
      ctx.moveTo(lx1, ly);
      ctx.lineTo(lx2, ly);
      ctx.stroke();
    }
    ctx.restore();
  }

  /// Draws decorative ink splatter dots for an authentic paintbrush feel.
  void drawPaintSplatter({
    required double x,
    required double y,
    required double radius,
    required String color,
    int count = 6,
    int seed = 17,
  }) {
    ctx.save();
    ctx.fillStyle = color.toJS;
    final rand = math.Random(seed);
    for (int i = 0; i < count; i++) {
      final angle = rand.nextDouble() * math.pi * 2.0;
      final dist = rand.nextDouble() * radius;
      final dotR = 1.0 + rand.nextDouble() * 2.5;
      final dx = x + math.cos(angle) * dist;
      final dy = y + math.sin(angle) * dist;
      ctx.beginPath();
      ctx.arc(dx, dy, dotR, 0, math.pi * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  /// Draws a stylized tilted rhombus badge containing a number or icon.
  void drawNumberedBadge({
    required int number,
    required double x,
    required double y,
    required double size,
    bool isSelected = false,
  }) {
    ctx.save();
    ctx.translate(x, y);

    // Drop shadow
    ctx.fillStyle = P5Palette.shadowBlack.toJS;
    _drawDiamondPath(3.0, 3.0, size);
    ctx.fill();

    // Background
    ctx.fillStyle =
        (isSelected ? P5Palette.crimsonRed : P5Palette.inkBlack).toJS;
    _drawDiamondPath(0, 0, size);
    ctx.fill();

    // Border
    ctx.strokeStyle =
        (isSelected ? P5Palette.boneWhite : P5Palette.amberGold).toJS;
    ctx.lineWidth = isSelected ? 2.5 : 1.5;
    ctx.stroke();

    // Text label
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold ${size * 0.55}px "Cinzel", "Courier New", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('$number', 0, 1.0);

    ctx.restore();
  }

  // =========================================================================
  // 2. IN-GAME RETICLE & INTERACTION PROMPT
  // =========================================================================

  /// Draws dynamic in-game crosshair reticle with Persona 5 rotation and pulsing.
  void drawReticle({
    required double screenWidth,
    required double screenHeight,
    required bool isHoveringInteractable,
  }) {
    final cx = screenWidth * 0.5;
    final cy = screenHeight * 0.5;

    ctx.save();
    ctx.translate(cx, cy);

    if (isHoveringInteractable) {
      // Expanded rotating active reticle
      final pulse = 1.0 + math.sin(_animationTime * 8.0) * 0.08;
      final rot = _animationTime * 1.5;
      final size = 22.0 * pulse;

      // Shadow
      ctx.strokeStyle = P5Palette.shadowBlack.toJS;
      ctx.lineWidth = 3.5;
      ctx.save();
      ctx.rotate(rot + math.pi * 0.25);
      ctx.strokeRect(-size * 0.5, -size * 0.5, size, size);
      ctx.restore();

      // Active Diamond
      ctx.strokeStyle = P5Palette.amberGold.toJS;
      ctx.lineWidth = 2.0;
      ctx.save();
      ctx.rotate(rot + math.pi * 0.25);
      ctx.strokeRect(-size * 0.5, -size * 0.5, size, size);
      ctx.restore();

      // Center dot
      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, math.pi * 2);
      ctx.fill();
    } else {
      // Subtle glowing center dot with drop shadow
      ctx.fillStyle = P5Palette.shadowBlack.toJS;
      ctx.beginPath();
      ctx.arc(1.0, 1.0, 3.0, 0, math.pi * 2);
      ctx.fill();

      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, math.pi * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  /// Draws the in-game interaction prompt banner at the bottom center.
  void drawPromptBanner({
    required double screenWidth,
    required double screenHeight,
    required String? promptText,
  }) {
    if (promptText == null || promptText.isEmpty) return;

    final cx = screenWidth * 0.5;
    final cy = screenHeight * 0.86;

    ctx.save();

    // Measure text
    ctx.font = 'bold 15px "Cinzel", serif';
    final textWidth = ctx
        .measureText(promptText.toUpperCase())
        .width
        .toDouble();
    final panelW = math.max(220.0, textWidth + 70.0);
    final panelH = 38.0;

    // Draw comic-cut skewed banner
    drawBrushPanel(
      x: cx,
      y: cy,
      width: panelW,
      height: panelH,
      skewAngleRad: -0.07,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.amberGold,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    // Red action tag accent on the left
    ctx.save();
    ctx.translate(cx - panelW * 0.5 + 24.0, cy);
    ctx.rotate(-0.07);
    ctx.fillStyle = P5Palette.crimsonRed.toJS;
    ctx.fillRect(-12.0, -12.0, 24.0, 24.0);
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 11px "Cinzel", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('E', 0, 1.0);
    ctx.restore();

    // Text
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 14px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText(promptText.toUpperCase(), cx + 12.0, cy);

    ctx.restore();
  }

  // =========================================================================
  // 3. PERSONA 5 DIALOGUE & NUMBERED CHOICES (1-N)
  // =========================================================================

  /// Draws full gameplay-based Persona 5 dialogue box and numbered choice strips.
  void drawDialogueAndChoices({
    required double screenWidth,
    required double screenHeight,
    required P5DialogueState state,
  }) {
    if (!state.isVisitorPresent &&
        state.fullText.isEmpty &&
        state.choices.isEmpty) {
      return;
    }

    final compact = screenWidth < 640 || screenHeight < 540;
    final boxW = math.min(screenWidth * (compact ? 0.92 : 0.85), 780.0);
    final boxH = compact ? 126.0 : 140.0;
    final boxX = screenWidth * 0.5;
    final boxY = math.min(screenHeight * 0.74, screenHeight - boxH * 0.58);

    // 1. Draw Main Speech Bubble / Dialogue Container
    drawBrushPanel(
      x: boxX,
      y: boxY,
      width: boxW,
      height: boxH,
      skewAngleRad: -0.05,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.5,
      cutCornerSize: 16.0,
    );

    // 2. Speaker Nameplate (Tilted Red Badge)
    final speaker = state.speakerName ?? 'VISITOR';
    final speakerLabel = '${speaker.toUpperCase()} TO YOU';
    ctx.font = 'bold ${compact ? 11 : 13}px "Cinzel", serif';
    final speakerBadgeW = math.min(
      boxW - 28.0,
      math.max(180.0, ctx.measureText(speakerLabel).width.toDouble() + 34.0),
    );
    final speakerBadgeH = 34.0;
    final speakerX = boxX - boxW * 0.5 + speakerBadgeW * 0.45;
    final speakerY = boxY - boxH * 0.5 - 6.0;

    drawBrushPanel(
      x: speakerX,
      y: speakerY,
      width: speakerBadgeW,
      height: speakerBadgeH,
      skewAngleRad: -0.12,
      fillColor: P5Palette.crimsonRed,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.0,
      shadow: true,
      cutCornerSize: 6.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold ${compact ? 11 : 13}px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText(speakerLabel, speakerX, speakerY);
    ctx.restore();

    // 3. Dialogue Text Body (Typewriter text)
    final revealed = state.revealedText;
    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = '16px "Georgia", serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    final textMarginLeft = boxX - boxW * 0.5 + 32.0;
    final textMarginTop = boxY - boxH * 0.5 + 32.0;
    final maxLineWidth = boxW - 64.0;

    _wrapText(ctx, revealed, textMarginLeft, textMarginTop, maxLineWidth, 24.0);
    ctx.restore();

    // 4. Compact, independent choice buttons rendered above the dialogue.
    if (state.choices.isNotEmpty) {
      final choiceCount = state.choices.length;
      ctx.font = 'bold ${compact ? 12 : 13}px "Cinzel", serif';
      final longestChoice = state.choices.fold<double>(
        0,
        (width, choice) =>
            math.max(width, ctx.measureText(choice).width.toDouble()),
      );
      final maxChoiceWidth = math.max(220.0, screenWidth - 24.0);
      final choiceStripW = math.min(
        maxChoiceWidth,
        math.max(compact ? 260.0 : 320.0, longestChoice + 78.0),
      );
      final choiceStripH = compact ? 31.0 : 34.0;
      final spacing = compact ? 35.0 : 39.0;
      // Reserve the secondary HUD lane so the first response never hides
      // beneath the room/objective/clock chrome on compact screens.
      // Compact HUDs reserve the right-hand temperature instrument lane;
      // starting choices below it prevents long response strips from
      // occluding the gauge on narrow screens.
      final viewportTop = compact ? 174.0 : 92.0;
      final viewportBottom = boxY - boxH * 0.5 - 18.0;
      final viewportHeight = math.max(0.0, viewportBottom - viewportTop);
      final visibleCount = math.max(
        1,
        ((viewportHeight + spacing - choiceStripH) / spacing).floor(),
      );
      ensureChoiceVisible(state.hoveredIndex ?? 0, choiceCount, visibleCount);
      final maxOffset = math.max(0, choiceCount - visibleCount);
      _choiceScrollOffset = _choiceScrollOffset.clamp(0, maxOffset);
      final visibleEnd = math.min(
        choiceCount,
        _choiceScrollOffset + visibleCount,
      );
      final choicesStartY = viewportTop;

      ctx.save();
      ctx.beginPath();
      ctx.rect(
        boxX - choiceStripW * 0.5 - 12.0,
        viewportTop - 16.0,
        choiceStripW + 24.0,
        math.max(1.0, viewportHeight + 20.0),
      );
      ctx.clip();

      ctx.save();
      ctx.fillStyle = P5Palette.brightAmber.toJS;
      ctx.font = 'bold 10px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('YOUR RESPONSE', boxX, choicesStartY - 4.0);
      ctx.restore();

      for (int i = _choiceScrollOffset; i < visibleEnd; i++) {
        final choiceText = state.choices[i];
        final numKey = i + 1;
        final visibleIndex = i - _choiceScrollOffset;
        final choiceY =
            choicesStartY + visibleIndex * spacing + choiceStripH * 0.5;
        final isHovered = state.hoveredIndex == i;
        final isSelected = state.selectedIndex == i;

        // Slide out effect when hovered/selected
        final offsetX = (isHovered || isSelected) ? 18.0 : 0.0;
        final curX = boxX + offsetX;

        // Record hit box for mouse selection
        _currentChoiceHitBoxes.add(
          CanvasHitBox(
            id: 'choice-$numKey',
            index: i,
            left: curX - choiceStripW * 0.5,
            top: choiceY - math.max(choiceStripH, 40.0) * 0.5,
            width: choiceStripW,
            height: math.max(choiceStripH, 40.0),
            text: choiceText,
          ),
        );

        // Choice strip
        drawBrushPanel(
          x: curX,
          y: choiceY,
          width: choiceStripW,
          height: choiceStripH,
          skewAngleRad: -0.06,
          fillColor: isSelected
              ? P5Palette.crimsonRed
              : (isHovered
                    ? P5Palette.charcoalDark
                    : P5Palette.inkBlackTranslucent),
          borderColor: (isHovered || isSelected)
              ? P5Palette.amberGold
              : P5Palette.boneWhite,
          borderWidth: (isHovered || isSelected) ? 2.5 : 1.5,
          cutCornerSize: 8.0,
        );

        // Number Badge [1]..[N]
        final badgeSize = 24.0;
        final badgeX = curX - choiceStripW * 0.5 + 24.0;
        drawNumberedBadge(
          number: numKey,
          x: badgeX,
          y: choiceY,
          size: badgeSize,
          isSelected: isSelected || isHovered,
        );

        // Choice text
        ctx.save();
        ctx.fillStyle =
            ((isSelected || isHovered)
                    ? P5Palette.brightAmber
                    : P5Palette.boneWhite)
                .toJS;
        ctx.font = 'bold ${compact ? 12 : 13}px "Cinzel", serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          _fitText(choiceText, choiceStripW - 72.0),
          badgeX + 22.0,
          choiceY,
        );
        ctx.restore();
      }
      ctx.restore();

      if (maxOffset > 0) {
        ctx.save();
        ctx.fillStyle = P5Palette.brightAmber.toJS;
        ctx.font = 'bold 10px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (_choiceScrollOffset > 0) {
          ctx.fillText(
            '▲ MORE',
            boxX + choiceStripW * 0.5 - 28.0,
            viewportTop - 8.0,
          );
        }
        if (_choiceScrollOffset < maxOffset) {
          ctx.fillText(
            '▼ MORE',
            boxX + choiceStripW * 0.5 - 28.0,
            viewportBottom + 8.0,
          );
        }
        ctx.restore();
      }
    } else if (state.isVisitorPresent && state.fullText.isNotEmpty) {
      // Continue is part of the renderer GUI, never a second modal surface.
      final continueW = compact ? 104.0 : 118.0;
      final continueH = compact ? 28.0 : 30.0;
      final continueX = boxX + boxW * 0.5 - continueW * 0.62;
      final continueY = boxY + boxH * 0.5 - continueH * 0.72;
      _currentChoiceHitBoxes.add(
        CanvasHitBox(
          id: 'dialogue-continue',
          index: -1,
          left: continueX - continueW * 0.5,
          top: continueY - continueH * 0.5,
          width: continueW,
          height: continueH,
          text: 'continue',
        ),
      );
      drawBrushPanel(
        x: continueX,
        y: continueY,
        width: continueW,
        height: continueH,
        skewAngleRad: -0.04,
        fillColor: P5Palette.charcoalDark,
        borderColor: P5Palette.amberGold,
        borderWidth: 1.5,
        cutCornerSize: 5.0,
      );
      ctx.save();
      ctx.fillStyle = P5Palette.brightAmber.toJS;
      ctx.font = 'bold ${compact ? 11 : 12}px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CONTINUE', continueX, continueY);
      ctx.restore();
    }
  }

  /// Draws Persona 5 angular progress wipe ring for dialogue silence countdowns per MASTERPLAN §40.3.
  void drawSilenceCountdownRing({
    required double centerX,
    required double centerY,
    required double radius,
    required double progress, // 0.0 to 1.0 over silence duration
  }) {
    if (progress <= 0.0) return;

    final startAngle = -math.pi / 2;
    final sweepAngle = 2 * math.pi * progress.clamp(0.0, 1.0);

    ctx.save();
    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      radius,
      startAngle,
      startAngle + sweepAngle,
      false,
    );

    if (progress < 0.6) {
      ctx.strokeStyle = P5Palette.amberGold.toJS;
    } else if (progress < 0.85) {
      ctx.strokeStyle = 'rgba(255, 140, 0, 1.0)'.toJS;
    } else {
      ctx.strokeStyle = P5Palette.crimsonRed.toJS;
    }

    ctx.lineWidth = 4.0;
    ctx.stroke();
    ctx.restore();
  }

  // =========================================================================
  // 4. HUD ELEMENTS (CLOCK, OBJECTIVE TICKER, ROOM BADGE)
  // =========================================================================

  /// Draws in-game gameplay HUD elements with Persona 5 styling.
  void drawHUD({
    required double screenWidth,
    required double screenHeight,
    required int currentDay,
    required double currentHour,
    bool twelveHourClock = false,
    required String currentRoomName,
    required String? objectiveText,
  }) {
    // 1. Day / Clock Badge in Top-Right
    final clockW = 160.0;
    final clockH = 44.0;
    final clockX = screenWidth - clockW * 0.5 - 24.0;
    final clockY = clockH * 0.5 + 20.0;

    drawBrushPanel(
      x: clockX,
      y: clockY,
      width: clockW,
      height: clockH,
      skewAngleRad: -0.08,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.crimsonRed,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 14px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    final totalMinutes = (currentHour * 60.0).floor().clamp(0, 1439);
    final hour = totalMinutes ~/ 60;
    final minute = totalMinutes % 60;
    final displayHour = twelveHourClock ? ((hour + 11) % 12) + 1 : hour;
    final suffix = twelveHourClock ? (hour < 12 ? ' AM' : ' PM') : '';
    final timeStr =
        'DAY $currentDay  •  ${displayHour.toString().padLeft(2, '0')}:${minute.toString().padLeft(2, '0')}$suffix';
    ctx.fillText(timeStr, clockX, clockY);
    ctx.restore();

    // 2. Room Name Badge in Top-Left
    final roomW = 170.0;
    final roomH = 34.0;
    final roomX = roomW * 0.5 + 24.0;
    final roomY = roomH * 0.5 + 20.0;

    drawBrushPanel(
      x: roomX,
      y: roomY,
      width: roomW,
      height: roomH,
      skewAngleRad: 0.08,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.amberGold,
      borderWidth: 1.8,
      cutCornerSize: 6.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.amberGold.toJS;
    ctx.font = 'bold 13px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      _fitText(currentRoomName.toUpperCase(), roomW - 28.0),
      roomX,
      roomY,
    );
    ctx.restore();

    // 3. Objective Banner if present
    if (objectiveText != null && objectiveText.isNotEmpty) {
      final objW = math.min(screenWidth * 0.6, 420.0);
      final objH = 32.0;
      final objX = screenWidth * 0.5;
      // Keep the objective on a second HUD lane instead of sharing the top row
      // with the room and clock badges on compact views.
      final objectiveCompact = screenWidth < 640 || screenHeight < 540;
      // Keep the broadcast/objective lane clear of the response viewport. The
      // first choice begins at y=92 on normal surfaces, so the banner's lower
      // edge stays above it with a deliberate 8 px breathing gap.
      final objY = objectiveCompact ? 68.0 : 68.0;

      drawBrushPanel(
        x: objX,
        y: objY,
        width: objW,
        height: objH,
        skewAngleRad: -0.04,
        fillColor: P5Palette.inkBlackTranslucent,
        borderColor: P5Palette.boneWhite,
        borderWidth: 1.5,
        cutCornerSize: 6.0,
      );

      ctx.save();
      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.font = '13px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(_fitText(objectiveText, objW - 28.0), objX, objY);
      ctx.restore();
    }
  }

  /// Draws the compact ambient-temperature gauge used by the gameplay HUD.
  ///
  /// The game supplies the resolved local temperature; this surface only
  /// presents it. The fixed -30..50 C scale matches the authored weather
  /// envelope while the marker remains safely clamped for extreme test data.
  void drawTemperatureGauge({
    required double screenWidth,
    required double screenHeight,
    required double temperatureCelsius,
  }) {
    const minimumCelsius = -30.0;
    const maximumCelsius = 50.0;
    final fraction = temperatureGaugeFraction(
      temperatureCelsius,
      minimumCelsius: minimumCelsius,
      maximumCelsius: maximumCelsius,
    );
    final compact = screenWidth < 640.0 || screenHeight < 540.0;
    final panelW = compact ? 108.0 : 116.0;
    final panelH = compact ? 68.0 : 72.0;
    final panelX = screenWidth - panelW * 0.5 - 24.0;
    // The objective banner ends at y=84; leave a small, stable gap before
    // this second right-hand HUD lane begins.
    final panelY = compact ? 122.0 : 126.0;

    drawBrushPanel(
      x: panelX,
      y: panelY,
      width: panelW,
      height: panelH,
      skewAngleRad: -0.055,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.boneWhite,
      borderWidth: 1.2,
      cutCornerSize: 7.0,
    );

    final boundedTemperature = temperatureCelsius.isFinite
        ? temperatureCelsius.clamp(minimumCelsius, maximumCelsius).toDouble()
        : 0.0;
    final valueText =
        '${boundedTemperature >= 0 ? '+' : ''}${boundedTemperature.toStringAsFixed(0)}°C';
    final trackW = panelW - 22.0;
    final trackH = 10.0;
    final trackLeft = panelX - trackW * 0.5;
    final trackTop = panelY + 10.0;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = P5Palette.amberGold.toJS;
    ctx.font = 'bold 9px "Courier New", monospace';
    ctx.fillText('AIR TEMPERATURE', panelX, panelY - 21.0);

    // Four restrained colour bands read as a continuous cold-to-hot scale at
    // HUD size while avoiding a noisy screen-space gradient.
    const bandColors = <String>[
      '#4b8fc5',
      '#79c8d5',
      '#d7c77a',
      '#df824f',
      '#d43b3b',
    ];
    final bandW = trackW / bandColors.length;
    for (var i = 0; i < bandColors.length; i++) {
      ctx.fillStyle = bandColors[i].toJS;
      ctx.fillRect(trackLeft + i * bandW, trackTop, bandW + 0.5, trackH);
    }
    ctx.strokeStyle = P5Palette.boneWhite.toJS;
    ctx.lineWidth = 1.0;
    ctx.strokeRect(trackLeft, trackTop, trackW, trackH);

    final markerX = trackLeft + trackW * fraction;
    ctx.strokeStyle = P5Palette.inkBlack.toJS;
    ctx.lineWidth = 4.0;
    ctx.beginPath();
    ctx.moveTo(markerX, trackTop - 4.0);
    ctx.lineTo(markerX, trackTop + trackH + 4.0);
    ctx.stroke();
    ctx.strokeStyle = P5Palette.boneWhite.toJS;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(markerX, trackTop - 4.0);
    ctx.lineTo(markerX, trackTop + trackH + 4.0);
    ctx.stroke();

    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 14px "Cinzel", serif';
    ctx.fillText(valueText, panelX, panelY + 31.0);
    ctx.fillStyle = P5Palette.mutedGrey.toJS;
    ctx.font = '8px "Courier New", monospace';
    ctx.fillText('-30', trackLeft + 9.0, panelY + 24.0);
    ctx.fillText('50', trackLeft + trackW - 8.0, panelY + 24.0);
    ctx.restore();
  }

  /// Renders contextual key hints and action prompts upholding UX best practices.
  void drawContextualHUDActionPrompts({
    required double screenWidth,
    required double screenHeight,
    required List<ContextualPromptHint> hints,
  }) {
    if (hints.isEmpty) return;

    final hintCount = hints.length;
    final compact = screenWidth < 640.0;
    final columns = compact ? math.min(2, hintCount) : hintCount;
    final gapX = compact ? 8.0 : 12.0;
    final gapY = compact ? 8.0 : 0.0;
    final hintW = compact
        ? math.min(140.0, (screenWidth - 32.0 - gapX) / columns)
        : 140.0;
    final rows = (hintCount + columns - 1) ~/ columns;

    for (int i = 0; i < hintCount; i++) {
      final row = i ~/ columns;
      final rowStart = row * columns;
      final rowCount = math.min(columns, hintCount - rowStart);
      final rowW = rowCount * hintW + (rowCount - 1) * gapX;
      final rowStartX = screenWidth * 0.5 - rowW * 0.5 + hintW * 0.5;
      final itemX = rowStartX + (i - rowStart) * (hintW + gapX);
      final itemY = screenHeight - 32.0 - (rows - 1 - row) * (28.0 + gapY);
      final hint = hints[i];
      final isPrimary = hint.isPrimary == true;

      drawBrushPanel(
        x: itemX,
        y: itemY,
        width: hintW,
        height: 28.0,
        skewAngleRad: -0.04,
        fillColor: isPrimary
            ? P5Palette.crimsonRed
            : P5Palette.inkBlackTranslucent,
        borderColor: isPrimary ? P5Palette.boneWhite : P5Palette.amberGold,
        borderWidth: 1.5,
        cutCornerSize: 6.0,
        shadow: isPrimary,
      );

      ctx.save();
      ctx.fillStyle =
          (isPrimary ? P5Palette.boneWhite : P5Palette.amberGold).toJS;
      ctx.font = 'bold 11px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        _fitText('[${hint.key}] ${hint.label}', hintW - 18.0),
        itemX,
        itemY,
      );
      ctx.restore();
    }
  }

  // =========================================================================
  // 5. CAPSLOCK SHADER TUNING LAB & POST-PROCESSING MENU
  // =========================================================================

  /// Draws the CapsLock-activated special Shader Tuning Lab & Post-Processing Menu.
  void drawShaderTuningMenu({
    required double screenWidth,
    required double screenHeight,
    required ShaderTuningState state,
  }) {
    if (state.menuAnimProgress <= 0.001) return;

    final progress = state.menuAnimProgress;
    final easeProgress = math.sin(progress * math.pi * 0.5);

    final boxW = math.min(screenWidth * 0.92, 860.0);
    final boxH = math.min(screenHeight * 0.88, 620.0);
    final finalX = screenWidth * 0.5;
    final startX = screenWidth + boxW * 0.6;
    final curX = startX + (finalX - startX) * easeProgress;
    final curY = screenHeight * 0.5;

    ctx.save();

    // 1. Semi-transparent backdrop overlay
    ctx.fillStyle = 'rgba(10, 8, 12, ${0.75 * easeProgress})'.toJS;
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    // 2. Main Menu Container
    drawBrushPanel(
      x: curX,
      y: curY,
      width: boxW,
      height: boxH,
      skewAngleRad: -0.025,
      fillColor: P5Palette.inkBlackTranslucent,
      borderColor: P5Palette.crimsonRed,
      borderWidth: 3.0,
      cutCornerSize: 18.0,
    );

    // Decorative Speedlines in background of menu
    drawSpeedlines(
      x: curX,
      y: curY,
      width: boxW - 40.0,
      height: boxH - 40.0,
      angleRad: -0.05,
      lineCount: 6,
      color: 'rgba(211, 47, 47, 0.15)',
    );

    // 3. Header Banner
    final headerW = math.min(boxW * 0.85, 560.0);
    final headerH = 42.0;
    final headerY = curY - boxH * 0.5 + 30.0;
    drawBrushPanel(
      x: curX,
      y: headerY,
      width: headerW,
      height: headerH,
      skewAngleRad: -0.06,
      fillColor: P5Palette.crimsonRed,
      borderColor: P5Palette.boneWhite,
      borderWidth: 2.0,
      cutCornerSize: 8.0,
    );

    ctx.save();
    ctx.fillStyle = P5Palette.boneWhite.toJS;
    ctx.font = 'bold 16px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = P5Palette.shadowBlack;
    ctx.shadowBlur = 4.0;
    ctx.fillText('◆ SHADER LAB & POST-PROCESSING SUITE ◆', curX, headerY);
    ctx.restore();

    // 4. Category Tab Bar. Categories are data-driven so the weather lab
    // remains a first-class tab instead of being hidden in post controls.
    final categories = ShaderTuningCategory.values;
    final tabCount = categories.length;
    final tabW = (boxW - 60.0) / tabCount;
    final tabH = 34.0;
    final tabY = curY - boxH * 0.5 + 75.0;

    for (int i = 0; i < tabCount; i++) {
      final cat = categories[i];
      final isSelected = state.selectedCategoryIndex == i;
      final tabX = curX - (boxW - 60.0) * 0.5 + tabW * (i + 0.5);

      drawBrushPanel(
        x: tabX,
        y: tabY,
        width: tabW - 8.0,
        height: tabH,
        skewAngleRad: -0.03,
        fillColor: isSelected ? P5Palette.amberGold : P5Palette.charcoalDark,
        borderColor: isSelected ? P5Palette.boneWhite : P5Palette.mutedGrey,
        borderWidth: isSelected ? 2.0 : 1.0,
        cutCornerSize: 6.0,
        shadow: false,
      );

      final label = switch (cat) {
        ShaderTuningCategory.pbrMaterial => '[1] PBR BRDF',
        ShaderTuningCategory.shadowsAndOcclusion => '[2] SHADOWS',
        ShaderTuningCategory.surfaceWeathering => '[3] DETAIL',
        ShaderTuningCategory.atmosphereAndPost => '[4] POST / FOG',
        ShaderTuningCategory.weatherEffects => '[5] WEATHER',
        ShaderTuningCategory.debugView => '[6] PASSES',
      };

      ctx.save();
      ctx.fillStyle =
          (isSelected ? P5Palette.inkBlack : P5Palette.boneWhite).toJS;
      ctx.font = 'bold 12px "Cinzel", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, tabX, tabY);
      ctx.restore();
    }

    // 5. Active Category Content Area
    final contentTopY = tabY + 36.0;

    if (state.selectedCategoryIndex == ShaderTuningCategory.debugView.index) {
      final diagCardW = boxW - 80.0;
      final diagCardH = 140.0;
      final diagCardY = contentTopY + diagCardH * 0.5 + 20.0;

      drawBrushPanel(
        x: curX,
        y: diagCardY,
        width: diagCardW,
        height: diagCardH,
        skewAngleRad: -0.02,
        fillColor: P5Palette.charcoalDark,
        borderColor: P5Palette.amberGold,
        borderWidth: 2.5,
        cutCornerSize: 10.0,
      );

      ctx.save();
      ctx.fillStyle = P5Palette.amberGold.toJS;
      ctx.font = 'bold 14px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        'ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [← / →] TO CYCLE):',
        curX,
        diagCardY - 35.0,
      );

      ctx.fillStyle = P5Palette.boneWhite.toJS;
      ctx.font = 'bold 22px "Cinzel", serif';
      ctx.shadowColor = P5Palette.shadowBlack;
      ctx.shadowBlur = 6.0;
      ctx.fillText(
        state.debugMode.displayName.toUpperCase(),
        curX,
        diagCardY + 5.0,
      );

      ctx.fillStyle = state.debugViewsAvailable
          ? P5Palette.brightAmber.toJS
          : P5Palette.mutedGrey.toJS;
      ctx.font = '13px "Georgia", serif';
      ctx.shadowBlur = 0.0;
      ctx.fillText(
        state.debugViewsAvailable
            ? 'Press [A / ←] Prev Pass  •  [D / →] Next Pass  •  [R] Disable Diagnostics'
            : _fitText(state.debugViewsReason, diagCardW - 48.0),
        curX,
        diagCardY + 42.0,
      );
      ctx.restore();
    } else {
      final items = state.itemsInCurrentCategory;
      final itemH = 44.0;
      final spacing = 52.0;
      final contentBottomY = curY + boxH * 0.5 - 52.0;
      final contentHeight = math.max(1.0, contentBottomY - contentTopY);
      final visibleCount = math.max(
        1,
        ((contentHeight + spacing - itemH) / spacing).floor(),
      );
      final maxOffset = math.max(0, items.length - visibleCount);
      _shaderScrollOffset = _shaderScrollOffset.clamp(0, maxOffset);
      final visibleEnd = math.min(
        items.length,
        _shaderScrollOffset + visibleCount,
      );

      ctx.save();
      ctx.beginPath();
      ctx.rect(
        curX - boxW * 0.5 + 24.0,
        contentTopY,
        boxW - 48.0,
        contentHeight,
      );
      ctx.clip();
      for (int i = _shaderScrollOffset; i < visibleEnd; i++) {
        final item = items[i];
        final isSelected = state.selectedItemIndex == i;
        final isLive = item.isLive;
        final visibleIndex = i - _shaderScrollOffset;
        final itemY = contentTopY + visibleIndex * spacing + itemH * 0.5;
        final itemW = boxW - 80.0;

        final itemX = curX + (isSelected ? 12.0 : 0.0);
        drawBrushPanel(
          x: itemX,
          y: itemY,
          width: itemW,
          height: itemH,
          skewAngleRad: -0.02,
          fillColor: isSelected
              ? (isLive ? P5Palette.charcoalDark : P5Palette.inkBlack)
              : P5Palette.inkBlackTranslucent,
          borderColor: isSelected && isLive
              ? P5Palette.amberGold
              : P5Palette.mutedGrey,
          borderWidth: isSelected ? 2.2 : 1.0,
          cutCornerSize: 6.0,
          shadow: isSelected,
        );

        if (isSelected) {
          drawNumberedBadge(
            number: i + 1,
            x: itemX - itemW * 0.5 + 20.0,
            y: itemY,
            size: 20.0,
            isSelected: true,
          );
        }

        ctx.save();
        ctx.fillStyle =
            (isLive
                    ? (isSelected ? P5Palette.brightAmber : P5Palette.boneWhite)
                    : P5Palette.mutedGrey)
                .toJS;
        ctx.font = 'bold 14px "Cinzel", serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        final labelOffset = isSelected ? 38.0 : 18.0;
        ctx.fillText(
          _fitText(
            item.label.toUpperCase(),
            itemW - (item.isToggle ? 250.0 : 340.0),
          ),
          itemX - itemW * 0.5 + labelOffset,
          itemY,
        );

        final controlRightX = itemX + itemW * 0.5 - 20.0;
        final statusX = controlRightX - (item.isToggle ? 110.0 : 265.0);
        ctx.fillStyle =
            (isLive ? P5Palette.brightAmber : P5Palette.mutedGrey).toJS;
        ctx.font = 'bold 9px "Courier New", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(isLive ? 'LIVE' : 'N/A', statusX, itemY);
        if (item.isToggle) {
          final isToggledOn = item.isLive
              ? (item.effectiveBoolValue ?? item.boolValue)
              : false;
          final badgeW = 74.0;
          final badgeH = 24.0;
          drawBrushPanel(
            x: controlRightX - badgeW * 0.5,
            y: itemY,
            width: badgeW,
            height: badgeH,
            skewAngleRad: -0.04,
            fillColor: isLive && isToggledOn
                ? P5Palette.crimsonRed
                : P5Palette.inkBlack,
            borderColor: isLive && isToggledOn
                ? P5Palette.boneWhite
                : P5Palette.mutedGrey,
            borderWidth: 1.5,
            shadow: false,
          );

          ctx.fillStyle = P5Palette.boneWhite.toJS;
          ctx.font = 'bold 12px "Cinzel", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(
            item.effectiveFormattedValue,
            controlRightX - badgeW * 0.5,
            itemY,
          );
        } else {
          final sliderW = 160.0;
          final sliderH = 8.0;
          final sliderX = controlRightX - 80.0 - sliderW * 0.5;

          ctx.fillStyle = P5Palette.inkBlack.toJS;
          ctx.fillRect(
            sliderX - sliderW * 0.5,
            itemY - sliderH * 0.5,
            sliderW,
            sliderH,
          );

          final frac = isLive
              ? ((item.currentValue - item.min) / (item.max - item.min)).clamp(
                  0.0,
                  1.0,
                )
              : 0.0;
          ctx.fillStyle =
              (isLive
                      ? (isSelected
                            ? P5Palette.amberGold
                            : P5Palette.crimsonRed)
                      : P5Palette.mutedGrey)
                  .toJS;
          ctx.fillRect(
            sliderX - sliderW * 0.5,
            itemY - sliderH * 0.5,
            sliderW * frac,
            sliderH,
          );

          if (isLive) {
            ctx.fillStyle = P5Palette.boneWhite.toJS;
            ctx.fillRect(
              sliderX - sliderW * 0.5 + sliderW * frac - 3.0,
              itemY - 7.0,
              6.0,
              14.0,
            );
          }

          // Min/Max range bounds text
          ctx.fillStyle = P5Palette.mutedGrey.toJS;
          ctx.font = '10px "Courier New", monospace';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(
            '${item.min.toStringAsFixed(1)} ',
            sliderX - sliderW * 0.5 - 4.0,
            itemY,
          );
          ctx.textAlign = 'left';
          ctx.fillText(
            ' ${item.max.toStringAsFixed(1)}',
            sliderX + sliderW * 0.5 + 4.0,
            itemY,
          );

          ctx.fillStyle =
              (isLive
                      ? (isSelected
                            ? P5Palette.brightAmber
                            : P5Palette.boneWhite)
                      : P5Palette.mutedGrey)
                  .toJS;
          ctx.font = 'bold 13px "Courier New", monospace';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.effectiveFormattedValue, controlRightX, itemY);
        }
        ctx.restore();
      }
      ctx.restore();

      if (maxOffset > 0) {
        ctx.save();
        ctx.fillStyle = P5Palette.brightAmber.toJS;
        ctx.font = 'bold 10px "Cinzel", serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        if (_shaderScrollOffset > 0) {
          ctx.fillText(
            '▲ SCROLL UP',
            curX + boxW * 0.5 - 28.0,
            contentTopY - 8.0,
          );
        }
        if (_shaderScrollOffset < maxOffset) {
          ctx.fillText(
            '▼ SCROLL DOWN',
            curX + boxW * 0.5 - 28.0,
            contentBottomY + 8.0,
          );
        }
        ctx.restore();
      }
    }

    // 6. Footer navigation and resolved-control truth.
    final footerY = curY + boxH * 0.5 - 24.0;
    final selected = state.currentSelectedItem;
    final resolvedLine =
        state.selectedCategoryIndex == ShaderTuningCategory.debugView.index
        ? (state.debugViewsAvailable
              ? 'LIVE DEBUG ATTACHMENTS • ACTIVE PASS: ${state.debugMode.name}'
              : state.debugViewsReason)
        : (selected == null
              ? ''
              : (selected.isLive
                    ? 'LIVE • REQUESTED ${selected.formattedValue} • EFFECTIVE ${selected.effectiveFormattedValue}'
                    : 'N/A • ${selected.availabilityReason ?? 'Not installed'}'));
    ctx.save();
    ctx.fillStyle = P5Palette.mutedGrey.toJS;
    ctx.font = '12px "Cinzel", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(_fitText(resolvedLine, boxW - 72.0), curX, footerY - 10.0);
    ctx.fillText(
      '[W / S / ↑ / ↓] Navigate  •  [A / D / ← / →] Adjust Live  •  [Q / E] Fine  •  [1 - 5] Tabs  •  [R / Shift+R] Reset  •  [CAPS LOCK / ESC] Close',
      curX,
      footerY + 10.0,
    );
    ctx.restore();

    ctx.restore();
  }

  // =========================================================================
  // INTERNAL DRAWING HELPERS
  // =========================================================================

  void _drawPolygonPath(List<Point2D> points) {
    if (points.isEmpty) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (int i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
  }

  void _drawDiamondPath(double ox, double oy, double size) {
    final half = size * 0.5;
    ctx.beginPath();
    ctx.moveTo(ox, oy - half);
    ctx.lineTo(ox + half * 1.15, oy);
    ctx.lineTo(ox, oy + half);
    ctx.lineTo(ox - half * 1.15, oy);
    ctx.closePath();
  }

  void _wrapText(
    web.CanvasRenderingContext2D context,
    String text,
    double x,
    double y,
    double maxWidth,
    double lineHeight,
  ) {
    final words = text.split(' ');
    var line = '';
    var currentY = y;

    for (int n = 0; n < words.length; n++) {
      final testLine = line.isEmpty ? words[n] : '$line ${words[n]}';
      final metrics = context.measureText(testLine);
      final testWidth = metrics.width.toDouble();
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, currentY);
        line = words[n];
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, currentY);
  }

  String _fitText(String text, double maxWidth) {
    if (maxWidth <= 12.0 || ctx.measureText(text).width <= maxWidth) {
      return text;
    }
    const suffix = '...';
    var fitted = text;
    while (fitted.isNotEmpty &&
        ctx.measureText('$fitted$suffix').width > maxWidth) {
      fitted = fitted.substring(0, fitted.length - 1);
    }
    return fitted.isEmpty ? suffix : '$fitted$suffix';
  }
}
