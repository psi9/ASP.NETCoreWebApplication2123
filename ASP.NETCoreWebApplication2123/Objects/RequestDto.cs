using System.Text.Json.Serialization;

namespace ASP.NETCoreWebApplication2123.Objects;

public record RequestDto(
    [property: JsonPropertyName("type")] ShlakType Type,
    [property: JsonPropertyName("name")] string Name
    );