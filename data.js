window.DATA = {
  // Table 5, in this order:
  // [band low end (kHz), band high end (MHz), f0 at half travel (kHz), f_low (kHz), f_high (kHz), Q]
  table5: [671, 2096, 763 , 748, 781, 23.12],

  // Table 6: one row per source amplitude (0.05, 0.1, 0.2, 0.3, 0.5, 1 V).
  // Each row is [TP1 peak (mV), TP3 DC (mV)]
  table6: [
    [41, 0], // 0.05 V
    [112, 0], // 0.1 V
    [226, 36], // 0.2 V
    [327, 106], // 0.3 V
    [515, 268], // 0.5 V
    [1053, 727]  // 1 V
  ]
};
