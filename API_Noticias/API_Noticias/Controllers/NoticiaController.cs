using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Noticias.Models;
using API_Noticias.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Noticias.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoticiaController : ControllerBase
    {
        private readonly NoticiaService _noticiaService;
        public NoticiaController(NoticiaService noticiaService)
        {
            _noticiaService = noticiaService;
        }

        [HttpGet]
        [Route("obtener")]
        public IActionResult Obtener()
        {
            return Ok(_noticiaService.Obtener());
        }

        [HttpGet]
        [Route("autores")]
        public IActionResult ObtenerAtuores()
        {
            return Ok(_noticiaService.ObtenerAutores());
        }

        [HttpPost]
        [Route("agregar")]
        public IActionResult Agregar([FromBody] Noticia _noticia)
        {
            var resultado = _noticiaService.AgregarNoticia(_noticia);            
            if (resultado)
            {
                return Ok();
            } 
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        [Route("editar")]
        public IActionResult Editar([FromBody] Noticia _noticia)
        {
            var resultado = _noticiaService.EditarNoticia(_noticia);
            if (resultado)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Route("eliminar/{NoticiaID}")]
        public IActionResult Eliminar(int NoticiaID)
        {
            var resultado = _noticiaService.EliminarNoticia(NoticiaID);
            if (resultado)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
