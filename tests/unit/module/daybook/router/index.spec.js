import daybookRouter from '../../../../../src/modules/daybook/router/index.js';

describe('Pruebas en el router, del modulo daybook', () => {

    test('Debe de contener todas las propiedades del Router daybook', () => {
        const objectDefaultRouter = {
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'entry-no-selected',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'entry',
                    props: true,
                    component: expect.any(Function),
                }
            ]
        }
        expect(daybookRouter).toMatchObject(objectDefaultRouter);
    });

    test('Las rutas del router, deben renderizar el componente correcto', async () => {
        //resolve with this package npm install --save-dev @babel/plugin-transform-runtime

        const arrayComponentes = daybookRouter.children.map( async (component) =>  await component.component() );
        const arrayPromises = await Promise.all(arrayComponentes);
        const arrayNamesComponents = arrayPromises.map( (component) => ( component.default.name ) );
        
        expect( arrayNamesComponents.includes('NoEntrySelected') ).toBeTruthy();
        expect( arrayNamesComponents.includes('EntryView') ).toBeTruthy();
    });
});