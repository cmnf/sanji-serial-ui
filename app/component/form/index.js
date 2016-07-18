import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import SerialFormContainerComponent from './container.component';
import SerialFormComponent from './form.component';

let app = angular.module('sanji.serial.form', [sjCore]);
app.component('sanjiSerialFormContainer', SerialFormContainerComponent);
app.component('sanjiSerialForm', SerialFormComponent);
export default app = app.name;
