namespace ZalupaCore.Repositories;

public class ZalupaRepository 
{
    private List<string> ZalupasNames { get; } = new() {"zalupa1", "zalupa2"};

    public IEnumerable<string> Get() => ZalupasNames;

    public void Add(string name) => ZalupasNames.Add(name);
}