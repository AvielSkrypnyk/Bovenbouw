using Microsoft.AspNetCore.Mvc;

namespace Includes_are_Required.Controllers;

public class TopicController : Controller
{
    // GET
    public IActionResult Battlefield1()
    {
        return View();
    }
    
    public IActionResult Osu()
    {
        return View();
    }
    
    public IActionResult Volleyball()
    {
        return View();
    }
    
    public IActionResult WorldofTanksBlitz()
    {
        return View();
    }
}