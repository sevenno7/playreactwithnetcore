using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PlayReactWithAPI.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly List<Product> _products;

        public ProductsController()
        {
            _products = new List<Product>
            {
                new Product {Id = 1, Name = "iPhone 8s"},
                new Product {Id = 2, Name = "iPhone 7s"},
                new Product {Id = 3, Name = "iPhone 6s"},
                new Product {Id = 4, Name = "iPhone 5s"},
            };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await Task.Delay(100);
            return new ObjectResult(_products);
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
