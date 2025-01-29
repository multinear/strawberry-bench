.PHONY: all
all:
	@echo "Nothing to do by default"

.PHONY: run
run:
	pnpm run dev --port 3000

.PHONY: preview
preview:
	pnpm run build
	pnpm run preview --port 3000

.PHONY: deploy
deploy:
	pnpm run build
	pnpm run deploy
