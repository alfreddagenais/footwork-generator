const AboutComponent = () => import(
    /* webpackChunkName: "about" */  './components/about'
    ).then(m =>  m.AboutComponent);
const GeneratorComponent = () => import(
    /* webpackChunkName: "generator" */  './components/generator'
    ).then(m =>  m.GeneratorComponent);
const DescriptionComponent = () => import(
    /* webpackChunkName: "description" */  './components/description'
    ).then(m =>  m.DescriptionComponent);
const ExercisesComponent = () => import(
    /* webpackChunkName: "exercises" */  './components/exercises'
    ).then(m =>  m.ExercisesComponent);
const ChangesComponent = () => import(
    /* webpackChunkName: "changes" */  './components/changes'
    ).then(m =>  m.ChangesComponent);


const routes =  [
    /*{ path: '*',  redirect:{name: 'Generator'} },*/
    { path: '/',  redirect:{name: 'Generator'} },
    { name: 'Generator', path: '/:lang?/generator',  component: GeneratorComponent },
    { name: 'Description', path: '/:lang?/description', component: DescriptionComponent },
    { name: 'Exercises', path: '/:lang?/exercises', component: ExercisesComponent },
    /*{ name: 'Changes', path: '/:lang?/changes', component: ChangesComponent },*/
    { name: 'About', path: '/:lang?/about', component: AboutComponent },
 /*   { path: '*', redirect: '/' },*/
];

export default routes;