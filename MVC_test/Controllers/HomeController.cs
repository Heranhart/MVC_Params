using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MVC_test.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_test.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        //public List<Curve> ListCurve;


        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            //ListCurve = new List<Curve>();
            //ListCurve.Add(new Curve(1));
        }

        public IActionResult Index()
        {
            //ViewBag.ListCurve = this.ListCurve;
            //ViewBag.TotalCurve = 1;
            //ListCurves ListCurve = new ListCurves();
            //ListCurve.AddCurve(0);
            return View();
        }

        //public void AddEntry()
        //{
        //    this.ListCurve.Add(new Curve(2));
        //    ViewBag.ListCurve = this.ListCurve;
        //}
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
