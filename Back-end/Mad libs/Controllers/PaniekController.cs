using Mad_libs.Models;
using Microsoft.AspNetCore.Mvc;

namespace Mad_libs.Controllers;

public class PaniekController : Controller
{
    // GET /paniek/
    public IActionResult Index()
    {
        return View();
    }
    // POST /paniek/
    [HttpPost]
    public IActionResult Result([FromForm] PaniekModel model)
    {
        if(!ModelState.IsValid)
        {
            return View("Index");
        }
        return View(model);
    }
}