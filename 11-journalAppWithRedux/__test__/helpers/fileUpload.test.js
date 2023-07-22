import { fileUpload } from "../../src/helpers/fileUpload";


describe(' Test in fileUpload', () => {

    test('should correct uploaded to claudinery', async() => {
        // para hacer esta prueba necesitas una rul de una imagen, la mía: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCVwcw_xZyyRdCH0r1v4MVeXoKqg8ATMRMw&usqp=CAU
        const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCVwcw_xZyyRdCH0r1v4MVeXoKqg8ATMRMw&usqp=CAU';
        const res = await fetch( imageURL );
        const blob = await res.json();
        const file = new File([blob], 'photo.jpg')

        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');

    });

})