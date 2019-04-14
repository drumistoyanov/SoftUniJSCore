const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;

describe('FilmStudio', function() {
    let filmStudio;

    beforeEach(function(){
        filmStudio = new FilmStudio("SU-Studio");
    });
    
    it('Contains a property is initialized to an empty array. ', function () {
        assert.isArray(filmStudio.films);
        assert.isEmpty(filmStudio.films);
        assert.equal(filmStudio.name,"SU-Studio","name is expected to be defined");
    });
    it("test if actor is added to film",function () {
        let a=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let b=filmStudio.casting("Dwayne Johnson","Iron-Man");
        let expected="Dwayne Johnson";
        let actual= filmStudio.films[0].filmRoles[0].actor = "Dwayne Johnson";

        assert.equal(actual,expected,`Shoudl equal ${expected}`);
    }); 
    it("Check makeMovie() with sequel movie",function () {
        let actual=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected=filmStudio.films[0];

        assert.equal(actual,expected,`Expected ${expected} to equal ${actual}`);
        actual=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
        expected=filmStudio.films[1];
        assert.equal(actual,expected,`Expected ${expected} to equal ${actual}`);
        assert.isNotEmpty(filmStudio.films);
    });
    
    it("test with available role",function () {
        let a=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected="You got the job! Mr. Dwayne Johnson you are next Iron-Man in the The Avengers. Congratz!";
        let actual=filmStudio.casting("Dwayne Johnson","Iron-Man");
        let name;
        assert.equal(actual,expected,`Shoudl equal ${expected}`);
    });
    it("Testing casting method with no film",function () {
        let expected="There are no films yet in SU-Studio.";

        let actual=filmStudio.casting("Dwayne Johnoson",'Iron-Man');
        assert.equal(actual,expected,`should equal ${actual}`);
    });

    it("Test makeMovie works with correct parameters",function () {

        let actual=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected=filmStudio.films[0];

        assert.equal(actual,expected,`Expected ${expected} to equal ${actual}`);
        assert.isNotEmpty(filmStudio.films);
    });
    it("Test if makeMovie() thro exception with invalid arguments given",function () {
        assert.throws(function () {
                filmStudio.makeMovie(['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'],'The Avengers')}
            ,'Invalid arguments');
    });
    it("Testing lookForProcucer method with valid film",function () {
        let a=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

        let b=filmStudio.lookForProducer("The Avengers");

        let expected="Film name: The Avengers\n" +
            "Cast:\n" +
            "false as Iron-Man\n" +
            "false as Thor\n" +
            "false as Hulk\n" +
            "false as Arrow guy\n";

        assert.equal(b,expected,`Shoudl equal ${expected}`);

    });

    it("Testing casting with no roles",function () {
        let a=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected="Dwayne Johnoson, we cannot find a Ant-Man role...";
        let actual=filmStudio.casting("Dwayne Johnoson",'Ant-Man');
        assert.equal(actual,expected,`should equal ${actual}`);
    });
    
    it("Testing lookForProducer(film) if throws error",function () {
        assert.throws(function () {
            filmStudio.lookForProducer("Avengers")
        },Error,"Avengers do not exist yet, but we need the money...");
    });

    it("Test if makeMovie() throws exception with more arguments",function () {
        assert.throws(function () {filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'],23)
        }, 'Invalid arguments count');
    });
    it("Testing casting method with no available roles",function () {
        let a=filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let expected="Dwayne Johnoson, we cannot find a Ant-Man role...";
        let actual=filmStudio.casting("Dwayne Johnoson",'Ant-Man');
        assert.equal(actual,expected,`should equal ${actual}`);
    });


});
