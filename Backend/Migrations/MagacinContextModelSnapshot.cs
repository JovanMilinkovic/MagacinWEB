﻿// <auto-generated />
using System;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(MagacinContext))]
    partial class MagacinContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.4")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.Magacin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID magacina")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ime")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Ime magacina");

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet magacina");

                    b.Property<int>("M")
                        .HasColumnType("int")
                        .HasColumnName("Dimenzija M");

                    b.Property<int>("N")
                        .HasColumnType("int")
                        .HasColumnName("Dimenzija N");

                    b.HasKey("ID");

                    b.ToTable("Magacini");
                });

            modelBuilder.Entity("Backend.Models.Mesto", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID mesta")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet");

                    b.Property<int>("MaxKapacitet")
                        .HasColumnType("int")
                        .HasColumnName("MaxKapacitet");

                    b.Property<int?>("RafID")
                        .HasColumnType("int");

                    b.Property<int>("X")
                        .HasColumnType("int")
                        .HasColumnName("X");

                    b.Property<int>("Y")
                        .HasColumnType("int")
                        .HasColumnName("Y");

                    b.HasKey("ID");

                    b.HasIndex("RafID");

                    b.ToTable("Mesta po rafovima");
                });

            modelBuilder.Entity("Backend.Models.Raf", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID rafa")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Boja")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Boja rafa");

                    b.Property<string>("ImeRafa")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Ime rafa");

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet");

                    b.Property<int?>("MagacinID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("MagacinID");

                    b.ToTable("Rafovi");
                });

            modelBuilder.Entity("Backend.Models.Mesto", b =>
                {
                    b.HasOne("Backend.Models.Raf", "Raf")
                        .WithMany("Mesta")
                        .HasForeignKey("RafID");

                    b.Navigation("Raf");
                });

            modelBuilder.Entity("Backend.Models.Raf", b =>
                {
                    b.HasOne("Backend.Models.Magacin", "Magacin")
                        .WithMany("Rafovi")
                        .HasForeignKey("MagacinID");

                    b.Navigation("Magacin");
                });

            modelBuilder.Entity("Backend.Models.Magacin", b =>
                {
                    b.Navigation("Rafovi");
                });

            modelBuilder.Entity("Backend.Models.Raf", b =>
                {
                    b.Navigation("Mesta");
                });
#pragma warning restore 612, 618
        }
    }
}
