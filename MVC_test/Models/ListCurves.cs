using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_test.Models
{
    public class ListCurves
    {
        public List<Curve> ListCurve { get; set; }

        public void AddCurve(int index)
        {
            this.ListCurve.Add(new Curve(index));
        }

    }
}
