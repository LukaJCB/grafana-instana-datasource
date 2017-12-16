import {InstanaDatasource} from './datasource';
import {InstanaDatasourceQueryCtrl} from './query_ctrl';
import {ConfigCtrl} from './config';


class InstanaQueryOptionsCtrl {}
InstanaQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class InstanaAnnotationsQueryCtrl {}
InstanaAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
  InstanaDatasource as Datasource,
  InstanaDatasourceQueryCtrl as QueryCtrl,
  ConfigCtrl as ConfigCtrl,
  InstanaQueryOptionsCtrl as QueryOptionsCtrl,
  InstanaAnnotationsQueryCtrl as AnnotationsQueryCtrl
};


