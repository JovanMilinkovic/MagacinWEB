using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Dimenzija M",
                table: "Magacini");

            migrationBuilder.RenameColumn(
                name: "MaxKapacitet",
                table: "Mesta po rafovima",
                newName: "MaxKolicina");

            migrationBuilder.RenameColumn(
                name: "Kapacitet",
                table: "Mesta po rafovima",
                newName: "Kolicina");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MaxKolicina",
                table: "Mesta po rafovima",
                newName: "MaxKapacitet");

            migrationBuilder.RenameColumn(
                name: "Kolicina",
                table: "Mesta po rafovima",
                newName: "Kapacitet");

            migrationBuilder.AddColumn<int>(
                name: "Dimenzija M",
                table: "Magacini",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
