using ASP.NETCoreWebApplication2123.Objects;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ZalupaCore.Repositories;

namespace ASP.NETCoreWebApplication2123.Controllers;

[ApiController, Route("shlaki")] 
public class ShlakiController : ControllerBase
{
    private readonly ZalupaRepository _zalupaRepository;
    private readonly GavnoRepository _gavnoRepository;

    public ShlakiController(ZalupaRepository zalupaRepository, GavnoRepository gavnoRepository)
    {
        _zalupaRepository = zalupaRepository;
        _gavnoRepository = gavnoRepository;
    }

    [HttpGet("get")]
    public IActionResult Get([FromQuery] ShlakType type)
    {
        IEnumerable<string> list = new List<string>(); 
        
        if (type == ShlakType.Zalupa)
            list = _zalupaRepository.Get();

        if (type == ShlakType.Gavno)
            list = _gavnoRepository.Get();
        
        return Ok(JsonConvert.SerializeObject(list));
    }

    [HttpPost("add")]
    public void Add([FromBody] RequestDto request)
    {
        if (request is null) 
            return;
        
        if (request.Type == ShlakType.Zalupa)
            _zalupaRepository.Add(request.Name);
        
        if (request.Type == ShlakType.Gavno)
            _gavnoRepository.Add(request.Name);
    }
}