using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mad_libs.Models;

namespace Mad_libs.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        return RedirectToAction("Index", "Paniek");
    }
}