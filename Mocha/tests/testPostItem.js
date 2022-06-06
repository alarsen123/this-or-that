var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test to post a single item object', function () {
    
    //const id = crypto.randomBytes(16).toString("hex");
    const id = 1;
	var requestResult;
	var response;

    before(function (done) {
        chai.request("http://localhost:8080")
			.post("/app/Items/")
            .send({
                _id: id,
                item_id: 100,
                category_id: 100,
                item_name: "Random",
                item_number_of_votes: 100,
                item_percent_of_votes: 10.0,
                item_rank: 1,
                link: "https://www.dumpaday.com/wp-content/uploads/2017/06/pictures-91.jpg",
                user_ids: [ 
                    {
                        user_id: 99
                    },
                    {
                        user_id: 100
                    }
		    ]
            })
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return a single object', function (){
		expect(response).to.have.status(200);
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
        expect(requestResult).to.include.keys('_id');
	    expect(requestResult).to.include.keys('item_name');
	    expect(requestResult).to.have.property('item_id');
		expect(response.body).to.not.be.a.string;
	});
	it('The element has the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
                expect(body).to.have.property('item_id');
                expect(body).to.have.property('category_id');
                expect(body).to.have.property('item_name').that.is.a('string');
                expect(body).to.have.property('item_number_of_votes');
                expect(body).to.have.property('item_percent_of_votes');
                expect(body).to.have.property('item_rank');
                expect(body).to.have.property('link');
				return true;
			});
	});	
	
});