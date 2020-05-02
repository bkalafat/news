using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using newsApi.Data;
using newsApi.Models;

namespace newsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly MockNewsRepo repository = new MockNewsRepo();

        // GET: api/News
        [HttpGet]
        public ActionResult<IEnumerable<News>> Get()
        {
            return Ok(repository.GetNewsList());
        }

        // GET: api/News/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<News> Get(Guid id)
        {
            return Ok(repository.GetNewsById(id));
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
