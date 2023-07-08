import { types } from '../../../src/auth';

describe(' test in Types ', () => {

    test('should show default stats of types', () => {

        expect( types ).toEqual( 
            { 
                login: '[Auth] Login', 
                logout: '[Auth] Logout' 
            }
        )

    });

});