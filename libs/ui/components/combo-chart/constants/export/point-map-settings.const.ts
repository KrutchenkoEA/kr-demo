export const KRUI_CHART_POINT_MAP_SETTINGS=
  [
    [
      'dataPoint', {
      pointMarkers: ['symbolCircle'],
      pointVisible: true,
      pointColor: 'wrapBg',
      pointStrokeColor: 'auto',
      pointSize: 5,
      pointStrokeSize: 2,
      pointLimit: 500
    }
    ],
    [
      'dataFillPoint', {
      pointMarkers: ['symbolCircle'],
      pointVisible: true,
      pointColor: 'auto',
      pointStrokeColor: 'auto',
      pointSize: 5,
      pointStrokeSize: 2,
      pointLimit: 500
    }
    ],
    [
      'dataPointReWrite', {
      pointMarkers: ['symbolCircle', 'symbolArrow'],
      pointVisible: true,
      pointColor: 'wrapBg',
      pointStrokeColor: 'auto',
      pointSize: 5,
      pointStrokeSize: 1,
      pointLimit: 500
    }
    ],
    [
      'dataFillPointReWrite', {
      pointMarkers: ['symbolCircle', 'symbolArrow'],
      pointVisible: true,
      pointColor: 'auto',
      pointStrokeColor: 'auto',
      pointSize: 5,
      pointStrokeSize: 1,
      pointLimit: 500
    }
    ],
    [
      'breakPoint', {
      pointMarkers: ['symbolX'],
      pointVisible: true,
      pointColor: 'auto',
      pointStrokeColor: 'auto',
      pointSize: 4,
      pointStrokeSize: 0,
      pointLimit: 50
    }
    ],
    [
      'breakPointTransparentBg', {
      pointMarkers: ['symbolXTransparentBg'],
      pointVisible: true,
      pointColor: 'auto',
      pointStrokeColor: 'auto',
      pointSize: 4,
      pointStrokeSize: 2,
      pointLimit: 50
    }
    ],
    [
      'reWritePoint', {
      pointMarkers: ['symbolArrow'],
      pointVisible: true,
      pointColor: 'auto',
      pointStrokeColor: 'auto',
      pointSize: 8,
      pointStrokeSize: 1,
      pointLimit: 500
    }
    ]
  ];

export const getKruiChartPointMapSettings = () => JSON.parse(JSON.stringify(KRUI_CHART_POINT_MAP_SETTINGS));
