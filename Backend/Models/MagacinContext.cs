using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class MagacinContext : DbContext
    {
        public DbSet<Magacin> Magacini { get; set; }
        public DbSet<Raf> Rafovi { get; set; }
        public DbSet<Mesto> Mesta { get; set; }
        public MagacinContext(DbContextOptions options) : base(options)
        {

        }
    }
}