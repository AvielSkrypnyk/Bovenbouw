using System.ComponentModel.DataAnnotations;

namespace Mad_libs.Models
{
    public class PaniekModel
    {
        [Required]
        public string Dier { get; set; }
        
        [Required]
        public string Persoon { get; set; }
        
        [Required]
        public string Land { get; set; }
        
        [Required]
        public string Verveling { get; set; }
        
        [Required]
        public string Speelgoed { get; set; }
        
        [Required]
        public string Docent { get; set; }
        
        [Required]
        public string Geld { get; set; }
        
        [Required]
        public string Bezigheid { get; set; }
    }
}