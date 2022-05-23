var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test getting multiple item objects', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/Items")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('item_name');
	    expect(requestResult[0]).to.have.property('item_id');
		expect(response.body).to.not.be.a.string;
	});
	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('item_id');
					expect(body[i]).to.have.property('category_id');
					expect(body[i]).to.have.property('item_name').that.is.a('string');
                    expect(body[i]).to.have.property('item_number_of_votes');
                    expect(body[i]).to.have.property('item_percent_of_votes');
                    expect(body[i]).to.have.property('item_rank');
				}
				return true;
			});
	});	
	
});