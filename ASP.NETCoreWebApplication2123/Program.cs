using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using ZalupaCore.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
// builder.Services.AddSpaStaticFiles(x => x.RootPath = "my-app/build");
builder.Services.AddSingleton<ZalupaRepository>();
builder.Services.AddSingleton<GavnoRepository>();

var app = builder.Build();
app.UseRouting();
// app.MapControllers();
app.UseEndpoints(x => x.MapControllers());
// app.UseSpaStaticFiles();
app.UseSpa(options =>
{
    options.Options.SourcePath = "my-app";
    options.UseReactDevelopmentServer("start");
});


app.Run();