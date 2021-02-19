const CommonService = require('./common.service');

xdescribe('Test Regex method', () => {
    let regex = null;

    beforeAll(async () => {
        const commonService = new CommonService();

        regex = await commonService.regex().toPromise();
    });

    it('Text Regex', () => {
        expect(regex).not.toBeNull();
    });
});