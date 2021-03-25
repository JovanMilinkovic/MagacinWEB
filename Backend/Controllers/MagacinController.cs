using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MagacinController : ControllerBase
    {
        public MagacinContext Context { get; set; }
        public MagacinController(MagacinContext context)
        {
            Context = context;
        }

        [Route("PreuzmiMagacine")]
        [HttpGet]
        public async Task<List<Magacin>> PreuzmiMagacine()
        {
            return await Context.Magacini.Include(p => p.Rafovi).ThenInclude(p => p.Mesta).ToListAsync();
        }

        [Route("DodajMagacin")]
        [HttpPost]
        public async Task DodajMagacin([FromBody] Magacin magacin)
        {
            Context.Magacini.Add(magacin);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniMagacin")]
        [HttpPut]
        public async Task<IActionResult> IzmeniMagacin([FromBody] Magacin magacin)
        {
            if(Context.Magacini.Any(p => p.Ime==magacin.Ime && p.Kapacitet==magacin.Kapacitet && p.N==magacin.N && p.M==magacin.M))
                return StatusCode(406);

            if(magacin.Ime==null || magacin.Kapacitet==0)
                return StatusCode(406);
            else
            {
                Context.Update<Magacin>(magacin);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }
        
        [Route("IzbrisiMagacin")]
        [HttpDelete]
        public async Task<IActionResult> IzbrisiMagacin(int id)
        {
            if(Context.Magacini.Any(p => p.ID==id))
            {
                var nizRafova = Context.Rafovi.Where(r => r.Magacin.ID==id);
                await nizRafova.ForEachAsync(r => {
                Context.Remove(r);
                });
                var magacin = await Context.Magacini.FindAsync(id);
                Context.Remove(magacin);
                await Context.SaveChangesAsync();
                return Ok();
            }
            else
                return StatusCode(406);
        }

        [Route("PreuzmiRafove/{idMagacina}")]
        [HttpGet]
        public async Task<List<Raf>> PreuzmiRafove(int idMagacina)
        {
            return await Context.Rafovi.Where(raf => raf.Magacin.ID==idMagacina).ToListAsync();
        }

        [Route("DodajRaf/{idMagacina}")]
        [HttpPost]
        public async Task<IActionResult> DodajRaf(int idMagacina, [FromBody] Raf raf)
        {
            var magacin = await Context.Magacini.FindAsync(idMagacina);
            raf.Magacin=magacin;
            if(Context.Rafovi.Any(p => p.ImeRafa==raf.ImeRafa && p.Boja==raf.Boja && p.Kapacitet==raf.Kapacitet))
                return StatusCode(406);
            if(raf.ImeRafa==null || raf.Boja==null || raf.Kapacitet==0)
                return StatusCode(406);
            else
            {
                Context.Rafovi.Add(raf);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }

        [Route("IzmeniRaf/{idMagacina}")]
        [HttpPut]
        public async Task<IActionResult> IzmeniRaf(int idMagacina, [FromBody] Raf raf)
        {   
            var magacin = await Context.Magacini.FindAsync(idMagacina);
            raf.Magacin=magacin;
            if(Context.Rafovi.Any(p => p.ImeRafa==raf.ImeRafa && p.Boja==raf.Boja && p.Kapacitet==raf.Kapacitet))
                return StatusCode(406);
            if(raf.ImeRafa==null || raf.Boja==null || raf.Kapacitet==0)
                return StatusCode(406);
            else
            {
                Context.Update<Raf>(raf);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }

        [Route("IzbrisiRaf")]
        [HttpDelete]
        public async Task IzbrisiRaf(int id)
        {
            var raf = await Context.Rafovi.FindAsync(id);
            Context.Remove(raf);
            await Context.SaveChangesAsync();
        }

        [Route("PreuzmiMesta/{idRafa}")]
        [HttpGet]
        public async Task<List<Mesto>> PreuzmiMesta(int idRafa)
        {
            return await Context.Mesta.Where(mesto => mesto.Raf.ID==idRafa).ToListAsync();
        }

        [Route("DodajMesto/{idRafa}")]
        [HttpPost]
        public async Task<IActionResult> DodajMesto(int idRafa, [FromBody] Mesto mesto)
        {
            var raf = await Context.Rafovi.FindAsync(idRafa);
            mesto.Raf=raf;

            if (mesto.Kapacitet == 0 || mesto.MaxKapacitet == 0)
            {
                return StatusCode(406);
            }
            else
            {
                Context.Mesta.Add(mesto);
                await Context.SaveChangesAsync();
                int a = mesto.ID;
                return Ok(a);
            }
        }
        
        [Route("IzmeniMesto")]
        [HttpPut]
        public async Task<IActionResult> IzmeniMesto([FromBody] Mesto mesto)
        {
            if (mesto.Kapacitet == 0 || mesto.MaxKapacitet == 0)
                return StatusCode(406);
            else
            {
                Context.Update<Mesto>(mesto);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }
        [Route("ObrisiMesto/{idRafa}")]
        [HttpDelete]
        public async Task ObrisiMesto(int id)
        {
            var mesto = await Context.FindAsync<Mesto>(id);
            Context.Remove(mesto);
            await Context.SaveChangesAsync();
        }
    }
}