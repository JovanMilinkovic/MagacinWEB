using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("Mesta po rafovima")]
    public class Mesto 
    {
        [Column("ID mesta")]
        public int ID { get; set; }

        [Column("Kolicina")]
        public int Kolicina { get; set; }
        
        [Column("MaxKolicina")]
        public int MaxKolicina { get; set; }

        [Column("X")]
        public int X { get; set; }

        [JsonIgnore]
        public Raf Raf { get; set; }
    }
}