// import { FakeService } from './fake.service';
// describe('FakeService', () => {
//   let service: FakeService;
//   let httpClientSpy :any;
//   beforeEach(() => {
    
//     httpClientSpy = {
//       get : jest.fn()
//     }
//     service = new FakeService(httpClientSpy);
//   });

  

//   test('get should be called with https://jsonplaceholder.typicode.com/posts/1 url', () =>{
    
//     const url = 'https://jsonplaceholder.typicode.com/posts/1';
//     service.getData();
//     expect(httpClientSpy.get).toBeCalledTimes(1);
//     expect(httpClientSpy.get).toHaveBeenCalledWith(url);
//   });

// });
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service:FakeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeService]
    });

    service = TestBed.inject(FakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  
  
  it('should return an Observable of data', (done) => {
    const mockData = 'get this data';
    
    service.getData().subscribe(
      (data:any )=> {
      expect(data).toEqual(mockData);
      done();
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1');
    expect(req.request.method).toBe('GET');
    
    req.flush(mockData);
  });
});
