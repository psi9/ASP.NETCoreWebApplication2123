namespace ZalupaCore.Repositories;

public class GavnoRepository 
{
    private List<string> GavnosNames { get; } = new() {"gavno3", "gavno4"};

    public IEnumerable<string> Get() => GavnosNames;

    public void Add(string name) => GavnosNames.Add(name);
}