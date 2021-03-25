using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Version1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Magacini",
                columns: table => new
                {
                    IDmagacina = table.Column<int>(name: "ID magacina", type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Imemagacina = table.Column<string>(name: "Ime magacina", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Kapacitetmagacina = table.Column<int>(name: "Kapacitet magacina", type: "int", nullable: false),
                    DimenzijaN = table.Column<int>(name: "Dimenzija N", type: "int", nullable: false),
                    DimenzijaM = table.Column<int>(name: "Dimenzija M", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Magacini", x => x.IDmagacina);
                });

            migrationBuilder.CreateTable(
                name: "Rafovi",
                columns: table => new
                {
                    IDrafa = table.Column<int>(name: "ID rafa", type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Imerafa = table.Column<string>(name: "Ime rafa", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Bojarafa = table.Column<string>(name: "Boja rafa", type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false),
                    MagacinID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rafovi", x => x.IDrafa);
                    table.ForeignKey(
                        name: "FK_Rafovi_Magacini_MagacinID",
                        column: x => x.MagacinID,
                        principalTable: "Magacini",
                        principalColumn: "ID magacina",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Mesta po rafovima",
                columns: table => new
                {
                    IDmesta = table.Column<int>(name: "ID mesta", type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Kapacitet = table.Column<int>(type: "int", nullable: false),
                    MaxKapacitet = table.Column<int>(type: "int", nullable: false),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false),
                    RafID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mesta po rafovima", x => x.IDmesta);
                    table.ForeignKey(
                        name: "FK_Mesta po rafovima_Rafovi_RafID",
                        column: x => x.RafID,
                        principalTable: "Rafovi",
                        principalColumn: "ID rafa",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Mesta po rafovima_RafID",
                table: "Mesta po rafovima",
                column: "RafID");

            migrationBuilder.CreateIndex(
                name: "IX_Rafovi_MagacinID",
                table: "Rafovi",
                column: "MagacinID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mesta po rafovima");

            migrationBuilder.DropTable(
                name: "Rafovi");

            migrationBuilder.DropTable(
                name: "Magacini");
        }
    }
}
