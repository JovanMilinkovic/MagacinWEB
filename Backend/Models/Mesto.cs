using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    [Table("Mesta po rafovima")]
    public class Mesto 
    {
        [Column("ID mesta")]
        public int ID { get; set; }

        [Column("Kapacitet")]
        public int Kapacitet { get; set; }
        
        [Column("MaxKapacitet")]
        public int MaxKapacitet { get; set; }

        [Column("X")]
        public int X { get; set; }

        [Column("Y")]
        public int Y { get; set; }

        [JsonIgnore]
        public Raf Raf { get; set; }
    }
}