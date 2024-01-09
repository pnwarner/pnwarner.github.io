const logo_transition = {
    img_timeout: 1250,
    fade_timeout: 10,
    fade_transition: true,
    frames: [
        "svg-01-paradox-symbol-001",
        "svg-01-paradox-symbol-002",
        "svg-01-paradox-symbol-003",
        "svg-01-paradox-symbol-004",
        "svg-01-paradox-symbol-005",
        "svg-01-paradox-symbol-006",
        "svg-01-paradox-symbol-007",
        "svg-01-paradox-symbol-008",
        "svg-01-paradox-symbol-009",
        "svg-01-paradox-symbol-010",
        "svg-01-paradox-symbol-011",
        "svg-01-paradox-symbol-012",
        "svg-01-paradox-symbol-013",
        "svg-01-paradox-symbol-014",
        "svg-01-paradox-symbol-013",
        "svg-01-paradox-symbol-012",
        "svg-01-paradox-symbol-011",
        "svg-01-paradox-symbol-010",
        "svg-01-paradox-symbol-009",
        "svg-01-paradox-symbol-008",
        "svg-01-paradox-symbol-007",
        "svg-01-paradox-symbol-006",
        "svg-01-paradox-symbol-005",
        "svg-01-paradox-symbol-004",
        "svg-01-paradox-symbol-003",
        "svg-01-paradox-symbol-002",
    ]
}

logoAnimation = new Animation("logo-frame-1", "logo-frame-2", logo_transition);
logoAnimation.startAnimation();