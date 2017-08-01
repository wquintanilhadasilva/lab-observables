using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using restfull.Domain;

namespace restfull_app.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IList<Pessoa> Get()
        {
            var retorno = new List<Pessoa>();

            for(var i = 1; i <= 10; i++)
            {
                retorno.Add(new Pessoa {Id=$"{i}", Nome = $"Pessoa {i}", SobreNome = $" SobreNome Pessoa {i}"});
            }

            return retorno;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IList<Pessoa> Get(int id)
        {
            return this.Get().Where(p => p.Id.Equals(id.ToString())).ToList();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
