# B2 CLI for GitHub Actions

Downloads the [standalone `b2` CLI](https://www.backblaze.com/b2/docs/quick_command_line.html) into an appropriate system PATH folder so it can be used as a command.

```yaml
steps:
- uses: wilsonzlin/setup-b2@v2
- run: b2 upload-file bucket ./local/file b2/key
```
