// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('info', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes:
      [
        {
          path: '/',
          name: 'quiz',
          getComponents: (nextState, cb) => {
            const importModules = Promise.all([
              import('containers/Quiz/reducer'),
              import('containers/Quiz'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('quiz', reducer.default);
              renderRoute(component);
            });
          },
        },
        {
          path: 'results',
          name: 'results',
          getComponents: (nextState, cb) => {
            const importModules = Promise.all([
              import('containers/Results/reducer'),
              import('containers/Results'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('results', reducer.default);
              renderRoute(component);
            });
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
