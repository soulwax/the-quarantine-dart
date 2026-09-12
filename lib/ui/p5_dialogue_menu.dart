import 'dart:math' as math;
import 'canvas_p5_gui_engine.dart';

/// Standalone Persona 5 Dialogue Choice Menu Manager (§40.3).
class P5DialogueMenu {
  final CanvasP5GuiEngine guiEngine;
  double _elapsedTimeMs = 0.0;
  double _silenceProgress = 0.0;
  bool _isSilenceActive = false;

  double get elapsedTimeMs => _elapsedTimeMs;
  bool get isSilenceActive => _isSilenceActive;

  P5DialogueMenu(this.guiEngine);

  void update(double dt, {bool silenceHovered = false}) {
    _elapsedTimeMs += dt * 1000.0;
    if (silenceHovered) {
      _isSilenceActive = true;
      _silenceProgress = math.min(1.0, _silenceProgress + dt / 8.0); // 8-second ring wipe
    } else {
      _isSilenceActive = false;
      _silenceProgress = math.max(0.0, _silenceProgress - dt * 2.0);
    }
  }

  void reset() {
    _elapsedTimeMs = 0.0;
    _silenceProgress = 0.0;
    _isSilenceActive = false;
  }

  void render({
    required double screenWidth,
    required double screenHeight,
    required P5DialogueState state,
  }) {
    guiEngine.drawDialogueAndChoices(
      screenWidth: screenWidth,
      screenHeight: screenHeight,
      state: state,
    );

    // Draw silence countdown ring if silence is active
    if (_silenceProgress > 0.0) {
      guiEngine.drawSilenceCountdownRing(
        centerX: screenWidth * 0.5,
        centerY: screenHeight * 0.88,
        radius: 28.0,
        progress: _silenceProgress,
      );
    }
  }
}
