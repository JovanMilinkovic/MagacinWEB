using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{

    [Table("Magacini")]
    public class Magacin
    {
        [Key]
        [Column("ID magacina")]
        public int ID { get; set; }

        [Column("Ime magacina")]
        [MaxLength(255)]
        public string Ime { get; set; }
        
        [Column("Kapacitet magacina")]
        public int Kapacitet { get; set; }

        [Column("Dimenzija N")]
        public int N { get; set; }

        [Column("Dimenzija M")]
        public int M { get; set; }

        public virtual List<Raf> Rafovi { get; set; }
    }
}