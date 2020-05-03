using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using newsApi.Data;
using newsApi.Models;

namespace newsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsRepo _repository;

        public NewsController(INewsRepo repository)
        {
            _repository = repository;
        }

        // GET: api/News
        [HttpGet]
        public IEnumerable<News> Get()
        {
            return _repository.GetNewsList();
        }

        // GET: api/News/5
        [HttpGet("{id}", Name = "Get")]
        public News Get(Guid id)
        {
            return _repository.GetNewsById(id);
        }

        // POST: api/News
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/News/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
