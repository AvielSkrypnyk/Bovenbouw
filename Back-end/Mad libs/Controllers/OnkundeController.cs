using Mad_libs.Models;
using Microsoft.AspNetCore.Mvc;

namespace Mad_libs.Controllers;

public class OnkundeController : Controller
{
    // GET /paniek/
    public IActionResult Index()
    {
        return View();
    }
    // POST /paniek/
    [HttpPost]
    public IActionResult Result([FromForm] OnkundeModel model)
    {
        if(!ModelState.IsValid)
        {
            return View("Index");
        }
        return View(model);
    }
}