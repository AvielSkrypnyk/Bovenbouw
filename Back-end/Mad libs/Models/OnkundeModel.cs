using System.ComponentModel.DataAnnotations;

namespace Mad_libs.Models
{
    public class OnkundeModel
    {
        [Required]
        public string Talent { get; set; }
        
        [Required]
        public string Persoon { get; set; }
        
        [Required]
        public string Getal { get; set; }
        
        [Required]
        public string VakantieSpullen { get; set; }
        
        [Required]
        public string GoedeEigenschap { get; set; }
        
        [Required]
        public string SlechteEigenschap { get; set; }
        
        [Required]
        public string ErgsteGebeurtenis { get; set; }
    }
}