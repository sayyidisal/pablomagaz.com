import base from 'base/';
import envConf from './enviroment';

const HttpServer = app => {
  app.listen(envConf.port, (err) => {
    if (err) return base.console.error(`${err}`);
    base.console.success(`HTTP Server up on http://localhost:${envConf.port}`);
  });
};

export default HttpServer; 