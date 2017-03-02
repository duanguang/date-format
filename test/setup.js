/**
 * Created by duanguang on 2017/3/2.
 */
import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost' });
global.window = global.document.defaultView;
global.navigator = global.window.navigator;