var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test getting a single item object', function () {

	var requestResult;
	var response;

    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/Items/1")
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
				return true;
			});
	});	
	
});