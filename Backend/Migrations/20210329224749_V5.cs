using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class V5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Y",
                table: "Mesta po rafovima");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Y",
                table: "Mesta po rafovima",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
