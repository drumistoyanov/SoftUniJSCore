$(() => {
    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', function (ctx) {
           ctx.partial('/views/home/index.hbs');
        });
    });
    app.run('#/home');
})