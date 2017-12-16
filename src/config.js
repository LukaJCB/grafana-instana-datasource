

export class ConfigCtrl {

  
    constructor($scope) {

        $scope.possibleRollups = [
            '1m', 
            '5m', 
            '10m', 
            '15m', 
            '30m',
            '1h',
            '2h',
            '6h',
            '12h',
            '1d',
            '2d',
            '7d',
            '14d',
            '1mo'
        ]

    }



}

ConfigCtrl.toMillis = function(rollup) {
    switch (rollup) {
      case '1m': return 60000;
      case '5m': return 300000;
      case '10m': return 600000;
      case '15m': return 900000;
      case '30m': return 1800000;
      case '1h': return 3600000;
      case '2h': return 7200000;
      case '6h': return 21600000;
      case '12h': return 432000000;
      case '1d': return 864000000;
      case '2d': return 1728000000;
      case '7d': return 6048000000;
      case '14d': return 12096000000;
      case '1mo': return 26280000000;

    }
     
}

ConfigCtrl.templateUrl = 'partials/config.html';