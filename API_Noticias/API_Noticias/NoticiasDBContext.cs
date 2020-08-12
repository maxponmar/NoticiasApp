using API_Noticias.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Noticias
{
    public class NoticiasDBContext : DbContext
    {
        public NoticiasDBContext(DbContextOptions opciones) : base(opciones)
        {

        }

        public DbSet<Noticia> Noticia { get; set; }
        public DbSet<Autor> Autor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new Noticia.Mapeo(modelBuilder.Entity<Noticia>());
            new Autor.Mapeo(modelBuilder.Entity<Autor>());
            //base.OnModelCreating(modelBuilder);
        }

    }
}
