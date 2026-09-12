import 'dart:math' as math;

/// Active UI panel state enumeration.
enum ActiveGuiPanel {
  none,
  dialogue,
  pauseMenu,
  journal,
  settings,
  shaderTuning,
  examineModal,
}

/// Dynamic Contextual Action Prompt Model for HUD display.
class ContextualPromptHint {
  final String key;
  final String label;
  final bool isPrimary;

  const ContextualPromptHint({
    required this.key,
    required this.label,
    this.isPrimary = false,
  });
}

/// Orchestrates GUI flow, smooth panel transition animations, modal stack focus,
/// and contextual action prompts upholding modern UX/UI best practices.
class GuiFlowCoordinator {
  ActiveGuiPanel _currentPanel = ActiveGuiPanel.none;
  ActiveGuiPanel _previousPanel = ActiveGuiPanel.none;

  double _transitionProgress = 0.0; // 0.0 = closed/hidden, 1.0 = fully open
  final double _transitionSpeed = 6.0;    // Smooth 160ms ease-out slide

  ActiveGuiPanel get currentPanel => _currentPanel;
  ActiveGuiPanel get previousPanel => _previousPanel;
  bool get isPanelActive => _currentPanel != ActiveGuiPanel.none;
  double get transitionProgress => _transitionProgress;

  /// Opens a GUI panel with smooth transition easing.
  void openPanel(ActiveGuiPanel panel) {
    if (_currentPanel == panel) return;
    _previousPanel = _currentPanel;
    _currentPanel = panel;
    _transitionProgress = 0.0;
  }

  /// Closes active GUI panel and restores gameplay view.
  void closeActivePanel() {
    if (_currentPanel == ActiveGuiPanel.none) return;
    _previousPanel = _currentPanel;
    _currentPanel = ActiveGuiPanel.none;
    _transitionProgress = 0.0;
  }

  /// Advances UI transition clocks and animation progress.
  void update(double dt) {
    if (_transitionProgress < 1.0) {
      _transitionProgress = math.min(1.0, _transitionProgress + dt * _transitionSpeed);
    }
  }

  /// Calculates smooth cubic ease-out transition progress (0.0 to 1.0).
  double getEasedProgress() {
    final t = _transitionProgress.clamp(0.0, 1.0);
    return 1.0 - math.pow(1.0 - t, 3).toDouble();
  }

  /// Evaluates contextual HUD action prompt hints based on active panel and interaction target.
  List<ContextualPromptHint> getActiveActionHints({
    required bool isHoveringInteractable,
    required String? interactableLabel,
    required bool isVisitorPresent,
  }) {
    if (_currentPanel == ActiveGuiPanel.dialogue || isVisitorPresent) {
      return const [
        ContextualPromptHint(key: '1 - 9', label: 'Select Response', isPrimary: true),
        ContextualPromptHint(key: 'SPACE', label: 'Silence Ring'),
      ];
    }

    if (_currentPanel == ActiveGuiPanel.shaderTuning) {
      return const [
        ContextualPromptHint(key: 'W / S', label: 'Navigate'),
        ContextualPromptHint(key: 'A / D', label: 'Adjust Coarse', isPrimary: true),
        ContextualPromptHint(key: 'Q / E', label: 'Adjust Fine'),
        ContextualPromptHint(key: '1 - 5', label: 'Switch Tab'),
        ContextualPromptHint(key: 'ESC / CAPS', label: 'Close'),
      ];
    }

    if (_currentPanel == ActiveGuiPanel.pauseMenu) {
      return const [
        ContextualPromptHint(key: 'W / S / ↑ / ↓', label: 'Navigate'),
        ContextualPromptHint(key: 'ENTER / SPACE', label: 'Select', isPrimary: true),
        ContextualPromptHint(key: 'ESC', label: 'Resume Game'),
      ];
    }

    if (isHoveringInteractable && interactableLabel != null) {
      return [
        ContextualPromptHint(key: 'E', label: 'Examine $interactableLabel', isPrimary: true),
        ContextualPromptHint(key: 'TAB', label: 'Journal'),
        ContextualPromptHint(key: 'CAPS', label: 'Shader Lab'),
      ];
    }

    // Default exploration state
    return const [
      ContextualPromptHint(key: 'W A S D', label: 'Move'),
      ContextualPromptHint(key: 'TAB', label: 'Journal'),
      ContextualPromptHint(key: 'CAPS', label: 'Shader Lab'),
      ContextualPromptHint(key: 'ESC', label: 'Pause'),
    ];
  }
}
