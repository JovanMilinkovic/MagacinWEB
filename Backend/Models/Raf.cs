using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models
{
    
    [Table("Rafovi")]
    public class Raf
    {
        [Key]
        [Column("ID rafa")]
        public int ID { get; set; }

        [Column("Ime rafa")]
        [MaxLength(255)]
        public string ImeRafa {get; set; }

        [Column("Boja rafa")]
        [MaxLength(255)]
        public string Boja { get; set; }

        [Column("Kapacitet")]
        public int Kapacitet { get; set; }

        public virtual List<Mesto> Mesta { get; set; }

        [JsonIgnore]
        public Magacin Magacin { get; set; }
    }
}